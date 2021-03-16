import { useTransactions } from '../../hooks/useTransactions';
import { Container }  from './styles';

export function TransactionTable() {
    const { transactions } = useTransactions();

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(t => (
                        <tr key={t.id}>
                            <td>{t.title}</td>
                            <td className={t.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(t.amount)}
                            </td>
                            <td>{t.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(t.createAt))}                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </Container>
    )
}