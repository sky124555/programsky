const app  = require("express")();
const http = require("http").createServer(app);
const io   = require("socket.io")(http);
const fs = require('fs'); 
/**
 * "/"にアクセスがあったらindex.htmlを返却
 */

app.get("/video/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});
app.get('/videoplayer', (req, res) => { 
  const range = req.headers.range 
  const videoPath = "test.mp4"; 
  const videoSize = fs.statSync(videoPath).size 
  const chunkSize = 1 * 1e6; 
  const start = Number(range.replace(/\D/g, "")) 
  const end = Math.min(start + chunkSize, videoSize - 1) 
  const contentLength = end - start + 1; 
  const headers = { 
      "Content-Range": `bytes ${start}-${end}/${videoSize}`, 
      "Accept-Ranges": "bytes", 
      "Content-Length": contentLength, 
      "Content-Type": "video/mp4"
  } 
  res.writeHead(206, headers) 
  const stream = fs.createReadStream(videoPath, { 
      start, 
      end 
  }) 
  stream.pipe(res) 
}) 
app.get('/audioplayer1', (req, res) => { 
  const range = req.headers.range 
  const audioPath = "startaudio.mp3"; 
  const videoSize = fs.statSync(audioPath).size 
  const chunkSize = 1 * 1e6; 
  const start = Number(range.replace(/\D/g, "")) 
  const end = Math.min(start + chunkSize, videoSize - 1) 
  const contentLength = end - start + 1; 
  const headers = { 
      "Content-Range": `bytes ${start}-${end}/${videoSize}`, 
      "Accept-Ranges": "bytes", 
      "Content-Length": contentLength, 
      "Content-Type": "video/mp4"
  } 
  res.writeHead(206, headers) 
  const stream = fs.createReadStream(audioPath, { 
      start, 
      end 
  }) 
  stream.pipe(res) 
}) 
app.get('/audioplayer2', (req, res) => { 
  const range = req.headers.range 
  const audioPath = "oneteamfinished.mp3"; 
  const videoSize = fs.statSync(audioPath).size 
  const chunkSize = 1 * 1e6; 
  const start = Number(range.replace(/\D/g, "")) 
  const end = Math.min(start + chunkSize, videoSize - 1) 
  const contentLength = end - start + 1; 
  const headers = { 
      "Content-Range": `bytes ${start}-${end}/${videoSize}`, 
      "Accept-Ranges": "bytes", 
      "Content-Length": contentLength, 
      "Content-Type": "video/mp4"
  } 
  res.writeHead(206, headers) 
  const stream = fs.createReadStream(audioPath, { 
      start, 
      end 
  }) 
  stream.pipe(res) 
}) 
app.get('/audioplayer3', (req, res) => { 
  const range = req.headers.range 
  const audioPath = "finished.mp3"; 
  const videoSize = fs.statSync(audioPath).size 
  const chunkSize = 1 * 1e6; 
  const start = Number(range.replace(/\D/g, "")) 
  const end = Math.min(start + chunkSize, videoSize - 1) 
  const contentLength = end - start + 1; 
  const headers = { 
      "Content-Range": `bytes ${start}-${end}/${videoSize}`, 
      "Accept-Ranges": "bytes", 
      "Content-Length": contentLength, 
      "Content-Type": "video/mp4"
  } 
  res.writeHead(206, headers) 
  const stream = fs.createReadStream(audioPath, { 
      start, 
      end 
  }) 
  stream.pipe(res) 
}) 
app.get('/audioplayer4', (req, res) => { 
  const range = req.headers.range 
  const audioPath = "gameover.mp3"; 
  const videoSize = fs.statSync(audioPath).size 
  const chunkSize = 1 * 1e6; 
  const start = Number(range.replace(/\D/g, "")) 
  const end = Math.min(start + chunkSize, videoSize - 1) 
  const contentLength = end - start + 1; 
  const headers = { 
      "Content-Range": `bytes ${start}-${end}/${videoSize}`, 
      "Accept-Ranges": "bytes", 
      "Content-Length": contentLength, 
      "Content-Type": "video/mp4"
  } 
  res.writeHead(206, headers) 
  const stream = fs.createReadStream(audioPath, { 
      start, 
      end 
  }) 
  stream.pipe(res) 
}) 

/**
 * [イベント] ユーザーが接続
 */

io.on("connection", (socket)=>{
  console.log("ユーザーが接続しました");
  socket.on("post", (msg)=>{
    io.emit("member-post", msg);
    console.log(msg);
  });
});

/**
 * 3000番でサーバを起動する
 */
http.listen(10000, ()=>{
  console.log("listening on *:10000");
});
