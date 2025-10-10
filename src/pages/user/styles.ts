import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#b8b8ff",
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },

  infoContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    color: "#555",
  },

  infoText: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },

  inputEditable: {
    backgroundColor: "#f2f2ff",
    padding: 8,
    borderRadius: 8,
    marginTop: 5,
    fontSize: 16,
    color: "#333",
  },

  logoutButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#ecebff",
    padding: 10,
    borderRadius: 30,
  },

  editButton: {
    position: "absolute",
    bottom: 30,
    left: 30,
    backgroundColor: "#8b89ff",
    padding: 12,
    borderRadius: 30,
  },
});
