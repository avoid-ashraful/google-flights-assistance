export function getUserLocation(callback, errorCallback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                callback({ latitude, longitude });
            },
            (error) => {
                console.error("Error getting user location:", error);
                if (errorCallback) errorCallback(error);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        if (errorCallback) errorCallback(new Error("Geolocation not supported"));
    }
}