function csvToArray(str, delimiter = ",") {

    // Get the symbol_color
    var color = "";
    const nameColor = str.split('\n')[0];
    var headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    if (nameColor == "symbol_color\r" || nameColor == "symbol_color") {
        str = str.substring(str.indexOf('\n') + 1);
        color = str.slice(0, str.indexOf("\n"))
        str = str.substring(str.indexOf('\n') + 1);
        headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    }

    var oldHeader;
    var newHeader;
    // Remove any possible \r characters
    if (headers[headers.length - 1][headers[headers.length - 1].length - 1] == "\r") {
        oldHeader = headers[headers.length - 1];
        newHeader = oldHeader.substring(0, oldHeader.length - 1);
        headers[headers.length - 1] = newHeader;
    }

    /* Slice from \n index + 1 to the end of the text
       Use split to create an array of each csv value row */
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    var arr = [];
    var components = "";
    var longer = false;
    var header_index = 0;
    var station = {};
    for (i = 0; i < rows.length; i++) {
        if (rows[i] == "" || rows[i] == "\n" || rows[i] == "\r")
            continue;
        for (j = 0; j < rows[i].length; j++) {
            // Account for when it is end of a quotation mark
            if (longer == true && rows[i][j] == "\"") {
                station[headers[header_index]] = components;
                header_index++;
                longer = false;
                components = "";
                j++;
            }
            // Account for when there are quotation marks; skip quotation and move to next char
            else if (longer == false && rows[i][j] == "\"") {
                components += rows[i][j + 1];
                longer = true;
                j++;
            }
            // Account for when there are quotation marks and a comma inside
            else if (longer == true && rows[i][j] == ",") {
                components += rows[i][j];
            }
            // New parameter
            else if (longer == false && rows[i][j] == ",") {
                station[headers[header_index]] = components;
                header_index++;
                components = "";
            }
            // Remove any \r characters
            else if (longer == false && rows[i][j] == "\r") {
                continue;
            } else {
                components += rows[i][j];
            }
        }
        station[headers[header_index]] = components;
        // Add the color as a parameter to each station
        station["color"] = color;
        arr[i] = station;
        components = "";
        station = {};
        header_index = 0;
    }
    // return the array
    return arr;
}