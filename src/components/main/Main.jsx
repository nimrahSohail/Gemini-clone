import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, Nimrah</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />

              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p style={{ color: "black", fontWeight:500}}dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
              {/* only displays data not other stuff  */}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            recusandae unde exercitationem fugiat, totam incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
