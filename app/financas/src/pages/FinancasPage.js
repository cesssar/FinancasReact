import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import {
  AppOrderTimeline,
  AppWebsiteVisits,
  AppWidgetSummary,
  AppLancamento,
} from '../sections/@dashboard/app';
// api
import GetSaldo from '../data/services/saldos';

export default function FinancasPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Finanças </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Conta Corrente" total={GetSaldo('/saldos/contacorrente')} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Faturas Crédito" total={GetSaldo('/saldos/faturascredito')} color="info"/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Limite disponível" total={GetSaldo('/saldos/limitecredito')} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Limite alimentação" total={GetSaldo('/saldos/limitealimentacao')} color="info" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={7}>
            <AppLancamento title='Novo Lançamento' subheader='' />
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            <AppOrderTimeline
              title="Últimos lançamentos"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="Gastos por categoria"
              subheader=""
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Alimentação',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Contas fixas',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Lazer',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
