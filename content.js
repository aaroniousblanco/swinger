// TODO: Add category logic, integrate Todd's stuff, update styling

$(document).ready(function() {
    let html = `	<div id="swingr-window" class="in right">
            <div id="tab">
                <i class="icon-social-organization orange"></i>
            </div>
            <div class="swingr-window-headline">
                <h1>SWINGR</h1>
            </div>
            <div class="swingr-content">
                <ul>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>OBJECT INFO <i class="icon-tech-script orange"></i></h3>
                        </div>
    	    				<div class="bar">
    	    					<table>
    	    						<tr>
    	    							<td class="label"><strong>ID: <strong></td>
    	    							<td id="dom-uuid" class="label-items"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Title: <strong></td>
    	    							<td id="title" class="label-items"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Section: <strong></td>
    	    							<td id="section" class="label-items"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Webtype: <strong></td>
    	    							<td id="web-type" class="label-items"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Topics: <strong></td>
    	    							<td id="topics" class="label-items"></td>
    	    						</tr>
    	                            <tr>
    	    							<td class="label"><strong>Category: <strong></td>
    	    							<td id="category" class="label-items"></td>
    	    						</tr>
    	    					</table>
    	    				</div>
                    </li>
                    <li class="module swing">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>OPEN IN SWING<i class="icon-tech-script orange"></i></h3>
                        </div>
                        <div class="bar">
                            <div id="swingOpenButton" class="button-big">
                                <i class="icon-tech-script"></i>
                            </div>
                        </div>
                    </li>
                    <li class="module swing">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>OBJECT FILTER<i class="icon-tech-script orange"></i></h3>
                        </div>
                        <div class="bar checkboxes">
                            <input type="checkbox" id="containers"> Containers<br>
                            <input type="checkbox" id="stories"> Stories<br>
                            <input type="checkbox" id="links"> Links<br>
                            <input type="checkbox" id="galleries"> Galleries<br>
                        </div>
                    </li>
                    <li class="module screenshot">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>BUGSPLAT <i class="icon-tech-bug orange"></i></h3>
                        </div>
                        <div class="bar">
                            <table>
                                <tr>
                                    <td class="label"><strong>URL: <strong></td>
                                    <td id="bugSplatURL"></td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>User Agent: <strong></td>
                                    <td id="bugSplatUserAgent"></td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Timestamp: <strong></td>
                                    <td id="bugSplatTimestamp"></td>
                                </tr>
                            </table>

                        </div>
                    </li>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>PERFORMANCE <i class="icon-tech-performance orange"></i></h3>
                        </div>
                        <div class="bar">
                            <table>
                                <tr>
                                    <td class="label"><strong>Script Size (Total): <strong></td>
                                    <td id="scriptSize"></td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Style Size (Total): <strong></td>
                                    <td id="styleSize"></td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Image Size (Total): <strong></td>
                                    <td id="imgSize"></td>
                                </tr>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
        </div>`,
        out = false;

    $('body').append(html);
    $("#tab").on("click", function(){
        inOut();
    });

    function inOut(){
    	if(!out){
    		$("#swingr-window").removeClass("in");
    		$("#swingr-window").addClass("out");
    		out = true;
    	} else {
    		$("#swingr-window").removeClass("out");
    		$("#swingr-window").addClass("in");
    		out = false;
    	}
    }

    // methode interactions and highlighting
    let $domUUID = $("#dom-uuid"),
        $title = $("#title"),
        $webType = $("#web-type"),
        $section = $("#section"),
        $topics = $("#topics"),
        $category = $("#category"),
        $openInSwingBtn = $("#swingOpenButton"),
        $allContainers = $("[data-uuid]"),
        $allStories = $("[data-webtype=story]"),
        $allGalleries = $("[data-webtype=Gallery]"),
        $allLinks = $("[data-webtype=Link]"),
        storiesChecked = false,
        containersChecked = false,
        linksChecked = false,
        galleriesChecked = false;

    // bug splat info
    let userAgent = navigator.userAgent,
        pageURL = window.location,
        currentDate = new Date();

    let datetime = (currentDate.getMonth()+1) + "/"
                + currentDate.getDate() + "/"
                + currentDate.getFullYear() + " @ "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes() + ":"
                + currentDate.getSeconds();

    // add bug splat values to dom
    $("#bugSplatURL").text(pageURL);
    $("#bugSplatTimestamp").text(datetime);
    $("#bugSplatUserAgent").text(userAgent);

    // performance setup
    var perfList = [];
    function isDefined(obj) {
    	return typeof(obj) !== 'undefined' && obj !== null ? obj : ''
    }
    var PerfItem = function(detail, i){
    	this.name = isDefined(detail.name).split('/').pop()
    	this.type = isDefined(detail.initiatorType)
    	this.namePath = isDefined(detail.name)
    	this.entryType = isDefined(detail.entryType)
    	this.startTime = isDefined(detail.startTime).toFixed(2)
    	this.responseStart = isDefined(detail.responseStart)
    	this.responseEnd = isDefined(detail.responseEnd)
    	this.duration = isDefined(detail.duration).toFixed(2)
    }

    function measurePerf(){
    	var data = performance.getEntries();
    	console.log("data: ", data);
    	// data.forEach(function(item, i){
    	// 	// console.log(item)
    	// 	var perfItem = new PerfItem(item)
    	// 	perfList.push(perfItem)
    	// });

        var byteSummary = {
            script: 0,
            link: 0,
            img: 0
        };

        var timeSummary = {
            script: 0,
            link: 0,
            img: 0
        };

        var totalBytes = 0;

        data.forEach((item) => {
            console.log(item.initiatorType);
            if ('link' == item.initiatorType || 'script' == item.initiatorType || 'img' == item.initiatorType) {
                byteSummary[item.initiatorType] += item.transferSize;
                timeSummary[item.initiatorType] += item.duration;
            }
            if (!isNaN(item.transferSize)) {
                totalBytes += item.transferSize;
            }
        });


        byteSummary.other = totalBytes - (byteSummary.img + byteSummary.script + byteSummary.link);
        console.log(byteSummary);
        console.log(timeSummary);
        console.log(byteSummary.img + byteSummary.script + byteSummary.link);
        console.log(totalBytes);
        $("#scriptSize").text(byteSummary.script);
        $("#styleSize").text(byteSummary.link);
        $("#imgSize").text(byteSummary.img);

        // attempt pie chart
        // var container_parent = $('.display'),
        // 	chart_container = $('#chart'),
        // 	margins = {top: 20, right: 20, bottom: 20, left: 20},
        // 	width = 400 - margins.left - margins.right,
        // 	height = (width * 0.8) - margins.top - margins.bottom,
        // 	vis,
        // 	vis_group,
        // 	aspect,
        // 	radius = Math.min(width, height) / 2 - margins.top;
        //
        // var defaults = {
        //     pad_angle: .02,
        //     animation: {
        //         duration: 500,
        //         easeType: 'back',
        //         scale: 1,
        //         scaleAmount: 1.1,
        //         diffFromCenter: radius / 20,
        //         delay_off: 0,
        //         delay_over: 150,
        //         strokeWidth_off: .5,
        //         strokeWidth_over: 1.5
        //     },
        //     colors: {
        //         fill_off: '#666',
        //         fill_over: '#003264',
        //         stroke_off: '#999',
        //         stroke_over: '#000'
        //     },
        //     opacity: {
        //         off: 1,
        //         over: 1,
        //         out: 0
        //     }
        // };
        //
        // var vis = d3.select('#chart').append('svg')
        //     .attr({
        //         'width': width + margins.left + margins.right,
        //         'height': height + margins.top + margins.bottom,
        //         'preserveAspectRatio': 'xMinYMid',
        //         'viewBox': '0 0 ' + (width + margins.left + margins.right) + ' ' + (height + margins.top + margins.bottom)
        //     });
        //
        // vis_group = vis.append('g')
        //     .attr({
        //         'transform': 'translate(' + (width/2 + margins.left) + ', ' + (height/2 + margins.top) + ')'
        //     });
        //
        // aspect = chart_container.width() / chart_container.height();
        //
        // var colors = ['#b024e4', '#6420c1', '#c78721', '#003264', '#8a0600', '#baba71', '#666666'];
        // var color = d3.scale.ordinal()
        // 	.range(colors);
        //
        // var tooltip = d3.select('body').append('div')
        // 	.attr({
        // 		'class': 'tooltip',
        // 		'opacity': 1e-6
        // 	});
        //
        // $(window).on('resize', function() {
        //     var targetWidth = container_parent.width()
        //     vis.attr({
        //         'width': targetWidth,
        //         'height': Math.round(targetWidth / aspect)
        //     })
        // });
        //
        //
        // var outerRadius = radius,
        // 	innerRadius = radius / 2;
        //
        // var arc = d3.svg.arc()
        // 	.padRadius(outerRadius)
        // 	.innerRadius(innerRadius);
        //
        // var pie = d3.layout.pie()
        // 	.padAngle(defaults.pad_angle)
        // 	.value(function(d){
        // 		return d.percentage
        // 	});
        //
        // var data = [
        // 	{
        // 		"type": "Script",
        // 		"percentage": (byteSummary.script/totalBytes).toString()
        // 	},
        // 	{
        // 		"type": "Style",
        // 		"percentage": (byteSummary.style/totalBytes).toString()
        // 	},
        // 	{
        // 		"type": "Image",
        // 		"percentage": (byteSummary.img/totalBytes).toString()
        // 	},
        // 	{
        // 		"type": "Other",
        // 		"percentage": (byteSummary.other/totalBytes).toString()
        // 	}
        // ];
        //
        // var Piechart = new function(){
        // 	this.get = function(){
        // 		// d3.json('data/population.json', function(error, data){
        // 			data.forEach(function(d){
        // 				d.percentage = +d.percentage
        // 			})
        //
        // 			total = d3.sum(pie(data), function(d){
        // 				return d.value
        // 			})
        //
        // 			vis_group.selectAll('path')
        // 				.data(pie(data))
        // 					.enter().append('path')
        // 				.each(function(d) {
        // 					d.outerRadius = outerRadius
        // 				})
        // 				.attr({
        // 					'd': arc,
        // 					'fill': defaults.colors.fill_off,
        // 					'stroke': defaults.colors.stroke_off,
        // 					'stroke-width': defaults.animation.strokeWidth_off
        // 				})
        // 				.each(function(d) {
        // 					d3.select(this).on('mouseover', user_interaction)
        // 					d3.select(this).on('mouseout', user_interaction)
        // 				})
        // 		// })
        // 	}
        // };
        //
        // Piechart.get();
        //
        // function user_interaction(d){
        // 	var rad = d3.event.type == 'mouseover' ? outerRadius + 20 : outerRadius;
        // 	var fill_color = d3.event.type == 'mouseover' ? defaults.colors.fill_over : defaults.colors.fill_off;
        // 	var delay = d3.event.type == 'mouseover' ? defaults.animation.delay_off : defaults.animation.delay_over;
        // 	var tooltip_opacity = d3.event.type == 'mouseover' ? defaults.opacity.over : defaults.opacity.out;
        // 	var text_opacity = d3.event.type == 'mouseover' ? defaults.opacity.over : defaults.opacity.out;
        //
        // 	// animate the arc
        // 	d3.select(this)
        // 		.transition()
        // 			.delay(delay)
        // 			.attrTween('d', function(d) {
        // 				percentage = d.data.percentage
        // 				var i = d3.interpolate(d.outerRadius, rad)
        // 				return function(t) {
        // 					d.outerRadius = i(t)
        // 					return arc(d)
        // 				}
        // 			})
        // 			.style({
        // 				'cursor': 'pointer',
        // 				'fill': fill_color
        // 			});
        //
        // 	// show the tooltip and set the text
        // 	d3.select('.tooltip')
        // 		.html(function(){
        // 			return '<span>' + d.data.race + '</span>'
        // 		})
        // 		.style({
        // 			'left': (d3.event.pageX) + 'px',
        // 			'top': (d3.event.pageY - 28) + 'px'
        // 		})
        // 		.transition()
        // 			.duration(defaults.animation.duration)
        // 			.style({
        // 				'opacity': tooltip_opacity
        // 			});
        //
        // 	// remove the previous percentage from the center of the chart
        // 	d3.select('.percentage')
        // 		.remove();
        //
        // 	// append the percentage to the center of the chart
        // 	vis_group.append('text')
        // 		.attr({
        // 			'class': 'percentage',
        // 			'x': radius / 20,
        // 			'y': radius / 20 + 10,
        // 			'text-anchor': 'middle',
        // 			'font-size': radius / 3,
        // 			'opacity': defaults.opacity.out
        // 		})
        // 		.text(function(t){
        // 			return ((d.data.percentage/total) * 100).toFixed(0) + '%'
        // 		})
        // 		.transition()
        // 			.duration(defaults.animation.duration)
        // 			.style({
        // 				'opacity': text_opacity
        // 			});
        //
        // }

    //	renderTable()
    }

    // grab performance data
    measurePerf();


    $("[data-uuid]").mouseenter(function() {
        if ((!storiesChecked) && (!containersChecked) && (!linksChecked) && (!galleriesChecked)) {
            $("[data-uuid], [data-objectuuid]").css('outline', 'unset');
            $(this).css('outline', '10px solid rgba(100, 255, 100, .5)');
        }
    }).mouseleave(function(){
        if ((!storiesChecked) && (!containersChecked) && (!linksChecked) && (!galleriesChecked)) {
            $("[data-uuid], [data-objectuuid]").css('outline', 'unset');
        }
    });

    $("[data-objectuuid]").mouseenter(function() {
        if ((!storiesChecked) && (!containersChecked) && (!linksChecked) && (!galleriesChecked)) {
            $("[data-uuid], [data-objectuuid]").css('outline', 'unset');
            if ($(this).data('webtype') === 'story') {
                $(this).css('outline', '10px solid rgba(255, 255, 100, .5)');
            } else if ($(this).data('webtype') === 'Gallery') {
                $(this).css('outline', '10px solid rgba(222, 127, 69, 0.92)');
            } else if ($(this).data('webtype') === 'Link') {
                $(this).css('outline', '10px solid rgba(69, 94, 222, 0.92)');
            } else if ($(this).data('webtype') === 'container') {
                $(this).css('outline', '10px solid rgba(100, 255, 100, .5)');
            }
        }
    });


    $("[data-objectuuid]").click(function() {
        $domUUID.text(""),
        $title.text(""),
        $webType.text(""),
        $section.text(""),
        $category.text(""),
        $topics.text("");

        let uuid = $(this).data('objectuuid') === "" ? "" : $(this).data('objectuuid'),
            title = $(this).data('title') === "" ? "" : $(this).data('title'),
            webType = $(this).data('webtype') === "" ? "" : $(this).data('webtype'),
            section = $(this).data('section') === "/" ? "home" : $(this).data('section'),
            topics = $(this).data('topics') === "" ? "" : $(this).data('topics'),
            category = $(this).data('category') === "" ? "" : $(this).data('category');

        $domUUID.text(uuid),
        $title.text(title),
        $webType.text(webType),
        $section.text(section),
        $topics.text(topics),
        $category.text(category);

        return false;
    }).dblclick(function() {
        let uuid = $(this).closest("[data-objectuuid]").data('objectuuid'),
            swingLink = 'http://10.243.230.4:5801/swing/index.html?null#open/' + uuid;
        window.open(swingLink);
        return false;
    });

    $("[data-uuid]").click(function() {
        $domUUID.text(""),
        $title.text(""),
        $webType.text(""),
        $section.text(""),
        $topics.text(""),
        $category.text("");

        let uuid = $(this).data('uuid') === "" ? "" : $(this).data('uuid'),
            title = $(this).data('title') === "" ? "" : $(this).data('title'),
            webType = $(this).data('webtype') === "" ? "" : $(this).data('webtype'),
            section = $(this).data('section') === "/" ? "home" : $(this).data('section'),
            topics = $(this).data('topics') === "" ? "" : $(this).data('topics'),
            category = $(this).data('category') === "" ? "" : $(this).data('category');

        $domUUID.text(uuid),
        $title.text(title),
        $webType.text(webType),
        $section.text(section),
        $topics.text(topics),
        $category.text(category);

        return false;
    }).dblclick(function() {
        let uuid = $(this).closest("[data-uuid]").data('uuid'),
            swingLink = 'http://10.243.230.4:5801/swing/index.html?null#open/' + uuid;
        window.open(swingLink);
        return false;
    });

    $openInSwingBtn.click(function() {
        if ($domUUID.text().length) {
            var uuidForSwing = $domUUID.text();
            window.open('http://10.243.230.4:5801/swing/index.html?null#open/' + uuidForSwing);
        }
    });

    $("#stories").change(function() {
        if ($(this).is(":checked")) {
            storiesChecked = true;
            $allStories.css('outline', '10px solid rgba(255, 255, 100, .5)');
        } else {
            storiesChecked = false;
            $allStories.css('outline', 'unset');
        }
    });

    $("#containers").change(function() {
        if ($(this).is(":checked")) {
            containersChecked = true;
            $allContainers.css('outline', '10px solid rgba(100, 255, 100, .5)');
        } else {
            containersChecked = false;
            $allContainers.css('outline', 'unset');
        }
    });

    $("#galleries").change(function() {
        if ($(this).is(":checked")) {
            galleriesChecked = true;
            $allGalleries.css('outline', '10px solid rgba(222, 127, 69, 0.92)');
        } else {
            galleriesChecked = false;
            $allGalleries.css('outline', 'unset');
        }
    });

    $("#links").change(function() {
        if ($(this).is(":checked")) {
            linksChecked = true;
            $allLinks.css('outline', '10px solid rgba(69, 94, 222, 0.92)');
        } else {
            linksChecked = false;
            $allLinks.css('outline', 'unset');
        }
    });

    $('.switch-window-btn').click(function() {
        if ($("#swingr-window").hasClass('right')) {
            $("#swingr-window").removeClass('right');
            $("#swingr-window").addClass('left');
        } else {
            $("#swingr-window").removeClass('left');
            $("#swingr-window").addClass('right');
        }
    });

});


//unused, but could be added at some point
var screenshotButtonHTML = `<div id="screenshotButton" class="button-big"><i class="icon-art-photography"></i></div>`;
var pieChartBaseHTML = `<div class="pie display"><div id="chart"></div></div>`;
var extraSectionsHTML = `<li class="module">
    <div class="options">
        <span class="remove">x</span>
        <span class="add hide">+</span>
        <h3>ANALYTICS <i class="icon-tech-notification orange"></i></h3>
    </div>
    <div class="bar">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
    </div>
</li>
<li class="module">
    <div class="options">
        <span class="remove">x</span>
        <span class="add hide">+</span>
        <h3>Notifications <i class="icon-tech-under-construction-1 orange"></i></h3>
    </div>
    <div class="bar">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
        <p>Morbi dapibus purus in nibh volutpat, ut volutpat mauris viverra. Cras fermentum sem in dolor ullamcorper varius.</p>
        <p>Aenean sagittis laoreet ornare. Sed faucibus pellentesque molestie. Nulla maximus libero vel mauris eleifend, a mollis ligula luctus.</p>
    </div>
</li>
<li class="module">
    <div class="options">
        <span class="remove">x</span>
        <span class="add hide">+</span>
        <h3>Screenshot <i class="icon-tech-cloud-download orange"></i></h3>
    </div>
    <div class="bar">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
    </div>
</li>
<li class="module">
    <div class="bar">
        <h3>Peformance <i class="icon-tech-performance orange"></i></h3>
    </div>
</li>
<li class="module">
    <div class="bar">
        <h3>Analytics <i class="icon-tech-notification orange"></i></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
    </div>
</li>
<li class="module">
    <div class="bar">
        <h3>Notifications <i class="icon-tech-under-construction-1 orange"></i></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
        <p>Morbi dapibus purus in nibh volutpat, ut volutpat mauris viverra. Cras fermentum sem in dolor ullamcorper varius.</p>
        <p>Aenean sagittis laoreet ornare. Sed faucibus pellentesque molestie. Nulla maximus libero vel mauris eleifend, a mollis ligula luctus.</p>
    </div>
</li>
<li class="module">
    <div class="bar">
        <h3>Screenshot <i class="icon-tech-cloud-download orange"></i></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
    </div>
</li>`;
