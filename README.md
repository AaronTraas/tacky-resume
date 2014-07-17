# Make my HTML résumé (or any page) Tacky!

For those of you who have not experienced Weird Al's sublime song "Tacky", you really should go listen to it right now. And watch the video. Here:

- http://www.nerdist.com/vepisode/weird-al-yankovic-gets-tacky-with-pharrells-happy/

Like many other developers, I have an HTML version of my résumé. In addition to wanting to make a version of my résumé in [Comic Sans](http://en.wikipedia.org/wiki/Comic_Sans), I figured I could kick it up a knotch. Not wanting prospective employers to see it when they do a Google search for me, I decided that only when I prepend #tacky to my résumé's URL will they get the tacky version. For instance:

- http://resume.traas.org/
	
Yields the nice, professional version of my résumé that I want employers to see. Whilst:

- http://resume.traas.org/#tacky

Renders a much more fun version. Best with your speakers on. Loud.

I also did not want to bulk up my non-tacky résumé with unnecessary resources, so the tacky version's resources are conditionally loaded. 

Do you want to make your résumé tacky? You're in luck! All you have to do is copy the `tacky` folder in this repo into your document root, and add this to your HTML body:

```html
<script>
    if( window.location.hash.substr(1) == 'tacky' ) {
        var tacky_script = document.createElement('script');
        tacky_script.setAttribute('src','tacky/tacky.js');
        document.body.appendChild(tacky_script);
    }
</script>
```

Your resume will continue to print the professional version because of the magic of media queries. 

Your mileage may vary with the CSS. You may have to customize it a bit. 
