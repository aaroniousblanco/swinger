// TODO: Add category logic, integrate Todd's stuff, update styling

$(document).ready(function() {
    let html = `	<div id="swingr-window" class="in">
            <div id="tab">
                <i class="icon-social-organization orange"></i>
            </div>
            <div class="swingr-window-headline">
                <h1>SWINGR</h1>
                <div class="switch-window-btn">

                </div>
            </div>
            <div class="swingr-content">
                <ul>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>OBJECT INFO <i class="icon-tech-bug orange"></i></h3>
                        </div>
    	    				<div class="bar">
    	    					<table>
    	    						<tr>
    	    							<td class="label"><strong>ID: <strong></td>
    	    							<td id="dom-uuid"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Title: <strong></td>
    	    							<td id="title"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Section: <strong></td>
    	    							<td id="section"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Webtype: <strong></td>
    	    							<td id="web-type"></td>
    	    						</tr>
    	    						<tr>
    	    							<td class="label"><strong>Topics: <strong></td>
    	    							<td id="topics"></td>
    	    						</tr>
    	                            <tr>
    	    							<td class="label"><strong>Category: <strong></td>
    	    							<td id="category"></td>
    	    						</tr>
    	    					</table>
    	                        <div>
    	                            <input type="checkbox" id="containers"> Containers<br>
    	                            <input type="checkbox" id="stories"> Stories<br>
    	                            <input type="checkbox" id="links"> Links<br>
    	                            <input type="checkbox" id="galleries"> Galleries<br>
    	                        </div>
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
                    <li class="module screenshot">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>BUGSPLAT <i class="icon-art-photography orange"></i></h3>
                        </div>
                        <div class="bar">
                            <div id="screenshotButton" class="button-big">
                                <i class="icon-art-photography"></i>
                            </div>
                        </div>
                    </li>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>PERFORMANCE <i class="icon-tech-performance orange"></i></h3>
                        </div>
                        <div class="bar">
                            <div class="pie display">
                                <div id="chart"></div>
                            </div>
                        </div>
                    </li>
                    <li class="module">
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
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Performance</h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
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
            $(this).css('outline', '10px solid rgba(255, 255, 100, .5)');
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

});
