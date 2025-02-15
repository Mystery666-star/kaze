const Home = () => {
    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                fontFamily: "sans-serif",
                margin: "0",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                overflow: "hidden", // Prevents scrolling
                padding: "20px", // Prevents elements from getting cut off on smaller screens
            }}
        >
            <div
                style={{
                    backgroundColor: "red",
                    borderRadius: "20px",
                    padding: "40px",
                    width: "80vw", // Makes it responsive
                    maxWidth: "350px", // Prevents it from getting too big
                    transform: "translateY(-5%)",
                    boxShadow: "0px 4px 15px rgba(255, 0, 0, 0.5)", // Nice shadow effect
                }}
            >
                <h1
                    style={{
                        fontSize: "5vw", // Scales with screen size
                        maxFontSize: "24px",
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
                            fontSize: "1rem",
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
                            fontSize: "1rem",
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
