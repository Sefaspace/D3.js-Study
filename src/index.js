import * as d3 from 'd3';
import indexTemplate from './index.sf';

document.querySelector('#main_body').innerHTML = indexTemplate;
document.querySelector('#main_body').appendChild(document.querySelector('#template').content.cloneNode(true));

d3.select('#section1 > div').attr('class', 'box blue');
d3.select('#section2').select('div').attr('class', 'box red');
