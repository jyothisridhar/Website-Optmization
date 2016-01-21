# Website-Performance-Optmization
Optimization of this online portfolio for speed. The goal was to optimize the critical rendering path and make the page render as quickly as possible.

## Instructions to run the app
- Download the project [here](https://github.com/jyothisridhar/Website-Optmization.git)
- The repository consists of both source and production code in directories named `src` and `dist` respectively.
- Open the _dist/index.html_ file in your browser.

###To use grunt tasks: 
- Make sure the package.json file and Gruntfile.js are in place in the root level.
- Navigate to the directory in a terminal and run the command `npm install`
- Command to minify images is : `grunt responsive_images`
- To minify html run the command : `grunt htmlmin`

## To check for performance
- Open [Pagespeed insights](https://developers.google.com/speed/pagespeed/insights/) and enter this url : http://jyothisridhar.github.io/Website-Optmization/dist/ to analyze the score.
- Click on [Cam's Pizzeria](http://jyothisridhar.github.io/Website-Optmization/dist/views/pizza.html) in the above html page and open dev tools (use Ctrl+shift+I in chrome) to check for performance of pizza.html

## Steps taken to optimize the website
### Part 1: Optmizing the pagespeed insights score for _index.html_
- Inline css for the main styles and used media attribute in the link tag for _print.css_
- Inline JS code for _perfmatters.js_
- Add code to use web font loader asynchronously
- Used grunt tasks to get responsive images and minify html

###Part 2: Optmize frame rates for _pizza.html_
####Changes made in _views/js/main.js_
- Used request animation frame for visual changes
- Modified code in `updatePositions()` to improve performance while scrolling
- To reduce time taken to resize pizzas `changePizzaSizes()` was modified

####Changes made to _views/css/style.css_
- .mover class was promoted to its own layer to reduce layout and paint of scrolling pizzas
