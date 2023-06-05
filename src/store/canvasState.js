import { makeAutoObservable } from 'mobx';

class CanvasState {
  canvas = null;
  socket = null;
  sessionId = null;
  undoList = [];
  redoList = [];
  username = '';

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  setUserName(username) {
    this.username = username;
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  setSessionId(id) {
    this.sessionId = id;
  }

  setSocket(socket) {
    this.socket = socket;
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  undo() {
    const ctx = this.canvas.getContext('2d');
    if (this.undoList.length > 0) {
      const dataUrl = this.undoList.pop();
      const img = new Image();
      this.redoList.push(this.canvas.toDataURL());
      img.src = dataUrl;
      img.onload = async () => {
        ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    } else {
      ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    const ctx = this.canvas.getContext('2d');
    if (this.redoList.length > 0) {
      const dataUrl = this.redoList.pop();
      const img = new Image();
      img.src = dataUrl;
      this.undoList.push(dataUrl);
      img.onload = async () => {
        ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }
}

export default new CanvasState();