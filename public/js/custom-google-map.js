function initMap() {
    const phnom_penh = {lat: 11.577478, lng: 104.914305};

    // Define the options on embedded Google Map
    let mapOptions = {
        center: phnom_penh,
        zoom: 12,
        mapTypeId: 'roadmap',

        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },

        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
    }

    // Declare google map layer with the defined map options
    let map = new google.maps.Map(document.getElementById('map'), mapOptions)

    // Define map markers
    let baseMarker = server_url + 'images/icons/markers/'
    let icons = {
        low: {
            name: 'Low',
            icon: baseMarker + 'green.png',
            legendIcon: baseMarker + 'greenx16.png'
        },
        medium: {
            name: 'Medium',
            icon: baseMarker + 'yellow.png',
            legendIcon: baseMarker + 'yellowx16.png'
        },
        serious: {
            name: 'Serious',
            icon: baseMarker + 'red.png',
            legendIcon: baseMarker + 'redx16.png'
        }
    }

    // Create marker on the map base on condition
    let markers = reports.map( function (report) {
        let condition = report.condition_id
        let icon
        switch (condition) {
            case 1:
                icon = icons.low
                break;
            case 2:
                icon = icons.medium
                break;
            case 3:
                icon = icons.serious
                break;
        }

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(report.lat, report.lng),
            icon: icon.icon,
            map: map,
        })
        return marker
    })

    // Add marker clustering
    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: server_url + 'vendors/markerclusterer/images/m'
    });

    // Add map legend
    let legend = document.getElementById('legend')
    for (let key in icons) {
        let type = icons[key]
        let name = type.name
        let icon = type.legendIcon
        let div = document.createElement('div')
        div.className = 'card-body p-2'
        div.innerHTML = '<img src="' + icon + '"> ' + name
        legend.appendChild(div)
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend)
}