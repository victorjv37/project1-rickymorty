
const ButtonToDelete = ({ onDelete, characterId }) => {

  return (
    <button onClick={() => onDelete(characterId)}>
      DELETE CHARACTER
    </button>
  );
};

export default ButtonToDelete;
