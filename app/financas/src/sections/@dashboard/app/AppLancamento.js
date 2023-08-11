import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';

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

    const [categoria, setCategoria] = React.useState('');
    const [conta, setConta] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategoria(event.target.value);
    };
    const handleChangeConta = (event: SelectChangeEvent) => {
        setConta(event.target.value);
    };

  return (
    <Card>
        <CardHeader title={title} subheader={subheader} />
            <Scrollbar>
            <Box sx={{ p: 1, textAlign: 'left' }}>
                <Select
                    labelId="categoria"
                    id="categoria"
                    value={categoria}
                    onChange={handleChange}
                    label="Categoria"
                    fullWidth
                >
                    <MenuItem value=""><em>Categoria</em></MenuItem>
                    <MenuItem value={1}>Alimentação</MenuItem>
                    <MenuItem value={2}>Básicos</MenuItem>
                    <MenuItem value={3}>Lazer</MenuItem>
                </Select>
            </Box>
            <Box sx={{ p: 1, textAlign: 'left' }}>
                <TextField name="valor" label="valor gasto" fullWidth />
            </Box>
            <Box sx={{ p: 1, textAlign: 'left' }}>
                <Select
                    labelId="conta"
                    id="conta"
                    value={conta}
                    onChange={handleChangeConta}
                    label="conta"
                    fullWidth
                >
                    <MenuItem value=""><em>Conta</em></MenuItem>
                    <MenuItem value={1}>Nubank Conta</MenuItem>
                    <MenuItem value={2}>Nubank Crédito</MenuItem>
                    <MenuItem value={3}>C6 Crédito</MenuItem>
                </Select>
            </Box>
            <Box sx={{ p: 1, textAlign: 'left' }}>
                <TextField name="parcelas" label="parcelas" value="1" fullWidth />
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

