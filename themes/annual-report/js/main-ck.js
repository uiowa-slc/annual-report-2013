$(function(){var e=$("#container");e.isotope({itemSelector:".item",layoutMode:"straightDown"});$("#filters a").click(function(){var t=$(this).attr("data-filter");e.isotope({filter:t});$("#filters a").removeClass("active");$(this).addClass("active");return!1})});var showSidebar=function(){$("body").removeClass("active-nav").toggleClass("active-sidebar");$(".menu-button").removeClass("active-button");$(".sidebar-button").toggleClass("active-button")},showMenu=function(){$("body").removeClass("active-sidebar").toggleClass("active-nav");$(".sidebar-button").removeClass("active-button");$(".menu-button").toggleClass("active-button")};jQuery(window).resize(function(){var e=$(".off-canvas-navigation").css("display"),t=$(".menu-button").css("display");e==="block"&&$("body").removeClass("three-column").addClass("small-screen");e==="none"&&$("body").removeClass("active-sidebar active-nav small-screen").addClass("three-column")});jQuery(document).ready(function(e){e(".menu-button").click(function(e){e.preventDefault();showMenu()});e(".sidebar-button").click(function(e){e.preventDefault();showSidebar()})});