import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions
  .region("europe-central2")
  .https.onRequest((req, res) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    res.send("Hello from Firebase!");
  });
