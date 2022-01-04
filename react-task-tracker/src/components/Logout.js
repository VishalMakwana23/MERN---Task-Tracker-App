const Logout = ({ color, text, setLoginUser }) => {
    return (
      <button
        onClick={() => setLoginUser({})}
        style={{ backgroundColor: color }}
        className='btn btn-block'
      >
        {text}
      </button>
    );
  };
  
  export default Logout;
  