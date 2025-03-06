function App() {
  const location = window.location.href;
  const url = location.replace('https://qq88-link.vercel.app/', '')
  const re = `https://qq881111.com/`

  const onClickClose = async () => {
    window.location.href = re;
  }

  const onClickContinue = () => {
    window.location.href = re;
  }
  return (
    <div className="popup" id="popup">
        <div className="popup-box">
          <h1 className="age-verification">💞QQ88💞</h1>
          <p className="message">Bạn muốn tiếp tục truy cập <a href="https://qq881111.com/">QQ88</a></p>
          <div className="btn-group">
          <button className="btn-yes"
          onClick={onClickContinue}
        >Truy cập QQ88</button>
          </div>
        </div>
      </div>
  );
}

export default App;
