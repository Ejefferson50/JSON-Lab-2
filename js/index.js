let request = new XMLHttpRequest();
let url ="https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";
/**
 * Open request using a method (GET, PUT, etc) and the URL
 */

request.onreadystatechange = function () {
    /**
     * if the html response is 200 "Okay" and 4 "Done"
     */
    if (request.status === 200 && request.readyState === 4) {
        /**
         *
         * Parse JSON file into an array like format
         */
        let arr = JSON.parse(this.responseText);
        for (let i = 0; i < arr.data.length; i++) {

            let current = arr.data[i];
            /**
             * If Data at index 10 is Golden Gate Bridge then respond with Name, Date, and Company.
             */

            if (current[10] === "Golden Gate Bridge") {
                document.getElementById('result').innerHTML += current[8] + "<br>" + current[9] + "<br>" + current [12] + "<br>";
            }
        }
    }
}

request.open("GET", url,true);

request.send();
