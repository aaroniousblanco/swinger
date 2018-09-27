// TODO: Add category logic, integrate Todd's stuff, update styling

$(document).ready(function() {
    let html = `	<div id="swingr-window" class="in">
            <div id="tab">

            </div>
            <div class="swingr-content">
                <h1><i class="icon-social-organization"></i> SWINGR</h1>

                <ul>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>Object Info <i class="icon-tech-bug"></i></h3>
                        </div>
                        <div class="bar">
                            <table>
                                <tr>
                                    <td class="label"><strong>ID: <strong></td>
                                    <td>38f4813e-c0e5-11e8-bced-649cd8401546</td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Title: <strong></td>
                                    <td>SCOTUS nominee Brett Kavanaugh's 1982 calendar pages sent to Senate committee</td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Section: <strong></td>
                                    <td>/</td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Webtype: <strong></td>
                                    <td>story</td>
                                </tr>
                                <tr>
                                    <td class="label"><strong>Topics: <strong></td>
                                    <td>cox_shared, cox_stub, ts_stub,cox_news,donald trump,video_added,se_stub,me_stub</td>
                                </tr>
                            </table>
                        </div>
                    </li>
                    <li class="module screenshot">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>Take a Screenshot <i class="icon-art-photography"></i></h3>
                        </div>
                        <div class="bar">
                            <h2>Take a Screenshot</h2>
                            <div id="screenshotButton" class="button-big">
                                <i class="icon-art-photography"></i>
                            </div>
                        </div>
                    </li>
                    <li class="module swing">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>Open in Swing<i class="icon-tech-script"></i></h3>
                        </div>
                        <div class="bar">
                            <h2>Open in Swing</h2>
                            <div id="swingOpenButton" class="button-big">
                                <i class="icon-tech-script"></i>
                            </div>
                        </div>
                    </li>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>Performance <i class="icon-tech-performance"></i></h3>
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
                            <h3>Analytics <i class="icon-tech-notification"></i></h3>
                        </div>
                        <div class="bar">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
                        </div>
                    </li>
                    <li class="module">
                        <div class="options">
                            <span class="remove">x</span>
                            <span class="add hide">+</span>
                            <h3>Notifications <i class="icon-tech-under-construction-1"></i></h3>
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
                            <h3>Screenshot <i class="icon-tech-cloud-download"></i></h3>
                        </div>
                        <div class="bar">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
                        </div>
                    </li>
					<li class="module">
	    				<div class="bar">
	    					<h3>Object Info <i class="icon-tech-bug"></i></h3>
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
	                        <div id="open-in-swing-btn">
	                            <h3>Swing Button HERE</h3>
	                        </div>
	                        <div>
	                            <input type="checkbox" id="containers"> Containers<br>
	                            <input type="checkbox" id="stories"> Stories<br>
	                            <input type="checkbox" id="links"> Links<br>
	                            <input type="checkbox" id="galleries"> Galleries<br>
	                        </div>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Peformance <i class="icon-tech-performance"></i></h3>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Analytics <i class="icon-tech-notification"></i></h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Notifications <i class="icon-tech-under-construction-1"></i></h3>
	    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra finibus erat placerat egestas. Mauris eget metus eget erat aliquam aliquet.</p>
	    					<p>Morbi dapibus purus in nibh volutpat, ut volutpat mauris viverra. Cras fermentum sem in dolor ullamcorper varius.</p>
	    					<p>Aenean sagittis laoreet ornare. Sed faucibus pellentesque molestie. Nulla maximus libero vel mauris eleifend, a mollis ligula luctus.</p>
	    				</div>
	    			</li>
	    			<li class="module">
	    				<div class="bar">
	    					<h3>Screenshot <i class="icon-tech-cloud-download"></i></h3>
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
        $openInSwingBtn = $("#open-in-swing-btn"),
        $allContainers = $("[data-uuid]"),
        $allStories = $("[data-webtype=story]"),
        $allGalleries = $("[data-webtype=gallery]"),
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
        $topics.text("");

        let uuid = $(this).data('objectuuid') === "" ? "" : $(this).data('objectuuid'),
            title = $(this).data('title') === "" ? "" : $(this).data('title'),
            webType = $(this).data('webtype') === "" ? "" : $(this).data('webtype'),
            section = $(this).data('section') === "/" ? "home" : $(this).data('section'),
            topics = $(this).data('topics') === "" ? "" : $(this).data('topics');

        $domUUID.text(uuid),
        $title.text(title),
        $webType.text(webType),
        $section.text(section),
        $topics.text(topics);

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
        $topics.text("");

        let uuid = $(this).data('uuid') === "" ? "" : $(this).data('uuid'),
            title = $(this).data('title') === "" ? "" : $(this).data('title'),
            webType = $(this).data('webtype') === "" ? "" : $(this).data('webtype'),
            section = $(this).data('section') === "/" ? "home" : $(this).data('section'),
            topics = $(this).data('topics') === "" ? "" : $(this).data('topics');

        $domUUID.text(uuid),
        $title.text(title),
        $webType.text(webType),
        $section.text(section),
        $topics.text(topics);

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
            $allGalleries.css('outline', '10px solid rgba(255, 255, 100, .5)');
        } else {
            galleriesChecked = false;
            $allGalleries.css('outline', 'unset');
        }
    });

    $("#links").change(function() {
        if ($(this).is(":checked")) {
            linksChecked = true;
            $allLinks.css('outline', '10px solid rgba(255, 255, 100, .5)');
        } else {
            linksChecked = false;
            $allLinks.css('outline', 'unset');
        }
    });

});
