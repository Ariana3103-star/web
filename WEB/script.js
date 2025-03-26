<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">document.addEventListener("DOMContentLoaded", function () {</p>
<p class="p1"><span class="Apple-converted-space">    </span>let elements = document.querySelectorAll(".fade-in");</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>function fadeInOnScroll() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>elements.forEach(el =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>let rect = el.getBoundingClientRect();</p>
<p class="p1"><span class="Apple-converted-space">            </span>if (rect.top &lt; window.innerHeight * 0.8) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>el.style.opacity = 1;</p>
<p class="p1"><span class="Apple-converted-space">                </span>el.style.transform = "translateY(0)";</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>window.addEventListener("scroll", fadeInOnScroll);</p>
<p class="p1"><span class="Apple-converted-space">    </span>fadeInOnScroll();</p>
<p class="p1">});</p>
</body>
</html>
