let isRecording = false;
let mediaRecorder;
let recordedChunks = [];

const recordBtn =
  document.getElementById("record-btn");
const recordingStatus =
  document.getElementById(
    "recording-status",
  );
const audioPlayback =
  document.getElementById(
    "audio-playback",
  );

// Перевіряємо доступність мікрофону
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    mediaRecorder = new MediaRecorder(
      stream,
    );

    // Коли запис завершується, зберігаємо дані
    mediaRecorder.ondataavailable = (
      e,
    ) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(
        recordedChunks,
        { type: "audio/webm" },
      );
      const audioURL =
        URL.createObjectURL(blob);
      audioPlayback.src = audioURL;
      recordedChunks = [];
    };
  });

recordBtn.addEventListener(
  "click",
  () => {
    if (!isRecording) {
      mediaRecorder.start();
      recordingStatus.textContent =
        "Recording...";
    } else {
      mediaRecorder.stop();
      recordingStatus.textContent = "";
    }
    isRecording = !isRecording;
  },
);
