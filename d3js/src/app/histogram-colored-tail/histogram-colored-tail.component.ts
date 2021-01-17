import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { csv } from 'd3';

@Component({
  selector: 'app-histogram-colored-tail',
  templateUrl: './histogram-colored-tail.component.html',
  styleUrls: ['./histogram-colored-tail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistogramColoredTailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.drawHistogram();
  }

  drawHistogram() {
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 40},
    innerWidth = 960 - margin.left - margin.right,
    innerHeight = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", innerWidth + margin.left + margin.right)
    .attr("height", innerHeight + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    //sample data structure
      // acceleration: "12"
      // cylinders: "8"
      // displacement: "307"
      // horsepower: "130"
      // mpg: "18"
      // name: "chevrolet chevelle malibu"
      // origin: "USA"
      // weight: "3504"
      // year: "1970"
      // get the data
    csv('https://vizhub.com/curran/datasets/auto-mpg.csv').then( data => {
      this.plotchart(data, svg, innerWidth, innerHeight)
    })
  }

  plotchart(data, svg, innerWidth, innerHeight) {
    
        // X axis: scale and draw:
        var xScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.horsepower)])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
          .range([0, innerWidth]);

        const xAxis = svg.append("g")
          .attr("transform", "translate(0," + innerHeight + ")")
          .call(d3.axisBottom(xScale));
        xAxis.selectAll('.tick line').remove();
        // set the parameters for the histogram
        var histogram = d3.histogram()
          .value(d => d.horsepower)   // I need to give the vector of value
          .domain(xScale.domain())  // then the domain of the graphic
          .thresholds(xScale.ticks(200)); // then the numbers of bins

        // And apply this function to data to get the bins
        var bins = histogram(data);

        // Y axis: scale and draw:
        var yScale = d3.scaleLinear()
          .range([innerHeight, 0]);
          yScale.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
        
        const yAxis = svg.append("g")
          .call(d3.axisLeft(yScale));
          yAxis.selectAll('.tick line').remove();

        const yAxisText = yAxis.append('g').append('text')
          .classed("text-label", true)
          // .attr('style','font-size: 1.5rem;')
          .attr('x',-innerHeight/2).attr('y',0)
          .attr('fill','black')
          .attr('text-anchor', 'middle')
          .text('hello');
          yAxisText.attr('transform', `rotate(-90) translate(0,-20)`);
        // append the bar rectangles to the svg element
        svg.selectAll("rect")
          .data(bins)
          .enter()
          .append("rect")
            .attr("x", 1)
            .attr("transform", function(d) { return "translate(" + xScale(d.x0) + "," + yScale(d.length) + ")"; })
            .attr("width", function(d) { return xScale(d.x1) - xScale(d.x0) -1 ; })
            .attr("height", function(d) { return innerHeight - yScale(d.length); })
            .style("fill", function(d){ return "#69b3a2" })

        // Append a vertical line to highlight the separation
        svg
        .append("line")
          .attr("x1", xScale(140) )
          .attr("x2", xScale(140) )
          .attr("y1", yScale(0))
          .attr("y2", yScale(1600))
          .attr("stroke", "grey")
          .attr("stroke-dasharray", "4")
        svg
        .append("text")
        .attr("x", xScale(190))
        .attr("y", xScale(1400))
        .text("threshold: 140")
        .style("font-size", "15px")
  }

}
