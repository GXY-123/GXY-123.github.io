/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: GXY
 * @Date: 2022-12-23 16:20:07
 * @LastEditors: GXY
 * @LastEditTime: 2022-12-24 15:05:15

$(document).ready(function(e){
        $('.footer_custom_text').html('本站已运行<SPAN id=span_dt_dt style="color: #fff;"></SPAN>');
    })

function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("1/2/2022 0:0:0");
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    span_dt_dt.innerHTML=' <font style=color:#2d85f0>'+daysold+'</font> 天 <font style=color:#f4433c>'+hrsold+'</font> 时 <font style=color:#ffbc32>'+minsold+'</font> 分 <font style=color:#0aa858>'+seconds+'</font> 秒';
    }
	show_date_time();

var now = new Date(); 
function createtime11() { 
document.getElementsByClassName("mytex2t").innerHTML = "本站已安全运行 ";
}
createtime11(); */

'use strict';
const cheerio = require('cheerio');

/**
 * 在页面插入新顶部图
 * @param {cheerio.Root} $ Root
 */
function insertTopImg($) {
    let header = $('#page-header');
    if (header.length === 0) return;
    let background = header.css('background-image');
    if (!background) return;
    $('#post, #page, #archive, #tag, #category').prepend(`<div class="top-img" style="background-image: ${background};"></div>`);
}

hexo.extend.filter.register('after_render:html', function(str, data) {
    let $ = cheerio.load(str, {
        decodeEntities: false
    });
    insertTopImg($);
    return $.html();
});