const ButtonToShow = ({ setVisibleProp, visibleProp }) => {
  return (
    <>
      <button
        onClick={() => {
          setVisibleProp(!visibleProp);
        }}
      >
        PINCHA AQUÍ!
      </button>
    </>
  );
};

export default ButtonToShow;
