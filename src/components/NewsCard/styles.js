import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
  
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
    // marginRight:'10px',
  
    
  },
  activeCard: {
    backgroundColor:"rgba(0,128,128,0.5)"
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    fontSize:"12px"
  },
  title: {
    padding: '0 16px',
    fontSize:"16px"
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  description :{
    fontSize:"13px"
  }
});