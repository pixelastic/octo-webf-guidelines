How to build the website ?

npm install
bower install
grunt wiredep
jekyll build


/jekyll/app contains source file. Unminified CSS and HTML.
/jekyll/\_layouts contains unminified jekyll layouts
We then execute a grunt build
/jekyll/dist contains all minified assets for jekyll
We then execute jekyll build
/dist contains the final static website

