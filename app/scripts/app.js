import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import select from '../blocks/select-block/select-block';
import customScrollBar from '../blocks/custom-scroll-bar/custom-scroll-bar';
import header from './common/header';
import range from './common/range';

$(() => {
  svg4everybody();
  objectFitImages();
  select();
  header();
  range();
  customScrollBar();
});
