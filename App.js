import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Black Sabbath est un groupe de quelle origine?",
      answerOptions: [
        { answerText: "Espagnole", isCorrect: false },
        { answerText: "Française", isCorrect: false },
        { answerText: "Américaine", isCorrect: true },
        { answerText: "Russe", isCorrect: false },
      ],
    },
    {
      questionText: "Quelle album appartient au groupe Slipknot?",
      answerOptions: [
        { answerText: "Wings", isCorrect: false },
        { answerText: "All hope is gone", isCorrect: true },
        { answerText: "Face yourself", isCorrect: false },
        { answerText: "Wake up", isCorrect: false },
      ],
    },
    {
      questionText: "L'album d'Orelsan 'Perdu d'avance' est sorti en : ",
      answerOptions: [
        { answerText: "2009", isCorrect: false },
        { answerText: "2013", isCorrect: true },
        { answerText: "2011", isCorrect: false },
        { answerText: "2008", isCorrect: false },
      ],
    },
    {
      questionText: "Quel style de musique a le groupe Prodigy?",
      answerOptions: [
        { answerText: "Rock", isCorrect: false },
        { answerText: "Rap", isCorrect: false },
        { answerText: "Pop", isCorrect: false },
        { answerText: "Techno", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source="https://global-uploads.webflow.com/5e8348b8a90ef7fb3fd572fe/5f3b5359c308ab33a764face_Content%20Hub%20Covers_Background%20Music.jpg"
      resizeMode="cover"
    >
      <Text style={styles.header}>
        <h1>Quiz Nation Sounds</h1>{" "}
      </Text>
      <Text style={styles.app}>
        {showScore ? (
          <Text style={styles.scoreSection}>
            Vous avez eu {score} reponses correctes sur {questions.length} 🎉
          </Text>
        ) : (
          <>
            <Text style={styles.questionSection}>
              <Text>
                <Text>
                  <h3>Question {currentQuestion + 1}</h3>
                </Text>
              </Text>
              <Text>{questions[currentQuestion].questionText}</Text>
            </Text>

            <Text style={styles.answerSection}>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  style={{
                    border: "none",
                    borderRadius: "4px",
                    height: "30px",
                  }}
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </Text>
          </>
        )}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: "0",
    fontFamily: "Bree Serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    color: "#ffff",
  },
  header: {
    textAlign: "center",
    color: "#ffff",
  },
  app: {
    backgroundColor: "#FFFF",
    width: "95%",
    minHeight: "200px",
    height: "min-content",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "space-evenly",
  },
  scoreSection: {
    display: "flex",
    fontSize: "16px",
    alignItems: "center",
  },
  questionSection: {
    width: "100%",
    position: "relative",
  },
  answerSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    fontSize: "16px",
    color: "#ffffff",
    background: "orange",
    borderRadius: "15px",
    display: "flex",
    padding: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
