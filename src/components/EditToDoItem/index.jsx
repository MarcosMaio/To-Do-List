import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import iconEdit from './lapis.png'
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: '#494a4b', // Cor do texto da label
    '&.Mui-focused': {
      color: '#494a4b', // Cor do texto da label ao foco
    }
  },
  '& .MuiInputBase-root': {
    color: '#494a4b', // Cor do texto digitado
    '&:before': {
      borderBottomColor: '#494a4b', // Cor da borda antes do foco
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#d3d3d3', // Cor da borda no hover
    },
    '&:after': {
      borderBottomColor: '#d3d3d3', // Cor da borda após o foco
    },
  },
}));

export default function EditToDoItem({toDo, editingToDo}) {
  const [open, setOpen] = React.useState(false);
  const [editingTextValue, setEditingTextValue] = React.useState(toDo.name)

  const handleEditTextValue = () => {
        editingToDo(toDo.id, editingTextValue)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img 
      src={iconEdit} 
      alt="Icon to edit tasks"
      style={{width: "20px",cursor: "pointer"}} 
      onClick={handleClickOpen}/>
      
      <Dialog style={{color: "#494a4b",}} open={open} onClose={handleClose}>
        <DialogTitle style={{color: "#494a4b", background: "#d3d3d3"}}>Task Item Edit</DialogTitle>
        <DialogContent>
          <StyledTextField
          onChange={(e) => {
            if(e.target.value.length <= 30) {
            setEditingTextValue(e.target.value)
          }
        }}
            defaultValue={editingTextValue}
            onClick={handleClose}
            autoFocus
            margin="dense"
            id="name"
            label="Task Edit ..."
            type="text"
            fullWidth
            variant="standard"
            style={{ fontFamily: 'DM Sans, sans-serif'}}
          />
        </DialogContent >
        <DialogActions style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
          <Button style={{color: "red"}}  onClick={handleClose}>Cancel</Button>
          <Button style={{color: "green"}}  onClick={() => {
            handleEditTextValue() 
            handleClose()
          }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}