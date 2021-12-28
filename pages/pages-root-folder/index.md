---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
#  image_fullwidth: header_unsplash_12.jpg
  image_fullwidth: background16-9.jpg
widget3:
  title: "Organizations"
#  url: 'http://ljhwang.github.io/Legacy-Seismic-Data/organizations'
  url: "/organizations/"
#  image: organizations_resampled.jpg
  image: students_bikes.jpg
  text: 'Discover organizations that maintain legacy seismic data.'
widget2:
#  title: "Index"
  title: "Events"
#  image: scrabble_resize.jpg
  image: crack_resize.jpg
  url: "/event-map/"
  text: 'Discover events with available legacy seismic data'
widget1:
  title: "Stations"
  url: "/station-map/"
  image: Fabra.jpeg
  text: 'Discover stations with available e-legacy seismic data'
#  widget3:
#    title: "References"
#    url: 'http://ljhwang.github.io/Legacy-Seismic-Data/references'
#    image: organizations2.jpg
#    text: 'Explore reference materials for projects referred to here.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: /references/
  text: references ›
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---
