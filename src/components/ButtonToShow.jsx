const ButtonToShow = ({ setVisibleProp, visibleProp }) => {
  return (
    <>
      <button
        onClick={() => {
          setVisibleProp(!visibleProp);
        }}
      >
        SHOW THEM!
      </button>
    </>
  );
};

export default ButtonToShow;
