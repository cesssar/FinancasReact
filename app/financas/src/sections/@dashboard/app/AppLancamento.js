import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// @mui
import {
  Card,
  CardHeader,
  Link, Stack, IconButton, InputAdornment, TextField, Checkbox,
  Container,
  Table, TableBody, TableContainer, Box, Button, Divider, Select,
  FormControl, InputLabel, MenuItem
} from '@mui/material';
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 200,
    margin: 'auto',
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    padding: theme.spacing(6, 0),
  }));

AppLancamento.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
};

export default function AppLancamento({title, subheader}) {

  return (
    <Card>
        <CardHeader title={title} subheader={subheader} />
            <Scrollbar>
            <Box sx={{ p: 1, textAlign: 'left' }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                >
                    <MenuItem value={10}>Alimentação</MenuItem>
                    <MenuItem value={20}>Básicos</MenuItem>
                    <MenuItem value={30}>Lazer</MenuItem>
                </Select>
            </Box>
                <Box sx={{ p: 1, textAlign: 'left' }}>
                    <TextField name="email" label="Email address" />
                </Box>
                <Box sx={{ p: 1, textAlign: 'left' }}>
                    <TextField name="email" label="Email address" />
                </Box>
                <Divider />
                <Box sx={{ p: 1, textAlign: 'right' }}>
                <Button variant="contained">
                    Salvar
                </Button>
                </Box>
        </Scrollbar>
    </Card>
  );
}

