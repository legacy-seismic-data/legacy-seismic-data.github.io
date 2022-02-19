# Legacy Seismic Data

The LSD website is i a community project. We depend on contributions from community members who maintain and use collections of legacy data.

We welcome all contributions including but not limited to:
* Corrections, updates, and addition to content
* New content and features
* Suggestions for website improvements

These maybe submitted as
* an github issue
* pull request

## Where to find files for:
 **Stations, Organizations, and Monitoring**  
 All markdown files are found in the folder */Organizations.*

 **Station Locations**  
Station data is located in */station_data.* Station data is formatted as .csv file. See file header for included metadata.

## Naming conventions
Filenames should be the same as its url (see also `permalink`)  and title used in the dropdown menu.

If station location data is added, use the same filename. The filename will also become part of the legend.

## Adding new files
When adding new Station, Organization, or Monitoring files, the following needs to be updated and added:
* To add to drop down menu, update *_data/navigation.yml*
* To changed a banner image, upload a medium resolution banner image at least 1900px wide to */images.* Current images are approximately 900px high. The banner mask will center on the image height. Use the same filename as its .md file.
* Add any references to *pages/references.md*
* If adding new station data, update the *station_data/filelist.csv*.  
 * Column 1: Filename
 * Column 2: hex color for map marker
* Add to legend on the relevant page:
 * *pages/station_map.md*
 * *pages/organizations.md*
 * *pages/monitoring.md*


If adding event data,  *TBD*
