const AccessGranted = () => {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                overflow: "hidden",
                textAlign: "center",
                padding: "10px",
            }}
        >
            {/* PNG Image */}
            <img 
                src="/Kaze.png" 
                alt="Background" 
                style={{
                    width: "90%", // Ensures it scales properly on all devices
                    maxWidth: "400px", // Prevents it from becoming too large
                    height: "auto",
                }} 
            />

            {/* GIF Image - Positioned over PNG */}
            <img 
                src="/comingsoon.gif" 
                alt="Coming Soon" 
                style={{
                    position: "absolute",
                    width: "50vw", // Dynamic size for all screen sizes
                    maxWidth: "200px", // Prevents it from getting too large
                    top: "45%", // Adjusted for better centering
                    transform: "translateY(-50%)",
                }} 
            />

            {/* Watch Out Text */}
            <h1 
                style={{
                    marginTop: "20px", // Adds spacing between images and text
                    fontSize: "4.5vw", // Responsive text
                    fontWeight: "bold",
                    color: "#ffcc00",
                    textShadow: "3px 3px 10px rgba(255, 255, 255, 0.8)",
                    letterSpacing: "2px",
                    width: "90%",
                    maxWidth: "400px",
                    whiteSpace: "normal", // Allows text to wrap on smaller screens
                    textAlign: "center",
                    animation: "pulseText 1.5s infinite alternate",
                }}
            >
                WATCH OUT THIS SPACE FOR MORE ACTION
            </h1>
        </div>
    );
};

export default AccessGranted;
