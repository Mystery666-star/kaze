const Home = () => {
    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                fontFamily: "sans-serif",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "20px", // Fix for mobile
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    backgroundColor: "red",
                    borderRadius: "20px",
                    padding: "10vw", // Responsive padding
                    width: "90vw", // Adjusted for smaller screens
                    maxWidth: "400px", // Prevents box from getting too big
                    boxShadow: "0px 4px 15px rgba(255, 0, 0, 0.5)",
                }}
            >
                <h1
                    style={{
                        fontSize: "6vw", // Scales based on screen size
                        maxWidth: "100%", // Prevents overflow
                        wordBreak: "break-word",
                        marginBottom: "20px",
                    }}
                >
                    Welcome to My Site!
                </h1>

                {/* Buttons */}
                <div>
                    <button
                        style={{
                            border: "none",
                            padding: "12px 24px",
                            margin: "10px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            transition: "0.3s",
                            backgroundColor: "lightgreen",
                            boxShadow: "0px 4px 10px rgba(0, 255, 0, 0.5)",
                        }}
                    >
                        Yes
                    </button>

                    <button
                        style={{
                            border: "none",
                            padding: "12px 24px",
                            margin: "10px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            transition: "0.3s",
                            backgroundColor: "orange",
                            boxShadow: "0px 4px 10px rgba(255, 165, 0, 0.5)",
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
