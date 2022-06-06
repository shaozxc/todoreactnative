import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          placeholderTextColor="white"
          placeholderOpacity="0.5 "
          onChangeText={goalInputHandler}
          color="white"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add a Goal"
              onPress={addGoalHandler}
              color="#4ECCA3"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#4ECCA3" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#232931",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#4ECCA3",
    width: "100%",
    height: "5%",
    paddingLeft: 8,
    backgroundColor: "#393E46",
    borderRadius: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
