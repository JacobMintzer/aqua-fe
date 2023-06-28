import { TableItem } from "./TableItem"
import Pagination from 'react-bootstrap/Pagination';

export const Table = ({ page, exact, query, setPage, data }) => {
    const count = (data?.count + 30 * page) ?? 0;
    const results = data?.results ?? [];

    const lastPage = Math.floor(count / 30);
    return <>
        <Pagination size="lg">
            {page != 0 && <Pagination.First onClick={() => setPage(0)} />}
            {page > 0 && < Pagination.Prev onClick={() => setPage(page - 1)} />}
            {lastPage > 1 && <Pagination.Item active>{page + 1}</Pagination.Item>}
            {page < lastPage && <Pagination.Next onClick={() => setPage(page + 1)} />}
            {page != lastPage && <Pagination.Last onClick={() => setPage(lastPage)} />}
        </Pagination>
        {
            (results ?? []).map(
                (item, index) => {
                    return (<TableItem key={index} data={item} index={index} />)
                }

            )}
        <Pagination size="lg" style={{ margin: "10px 0" }}>
            {page > 0 && <Pagination.First onClick={() => setPage(0)} />}
            {page > 0 && < Pagination.Prev onClick={() => setPage(page - 1)} />}
            {lastPage > 1 && <Pagination.Item active>{page + 1}</Pagination.Item>}
            {page < lastPage && <Pagination.Next onClick={() => setPage(page + 1)} />}
            {page < lastPage && <Pagination.Last onClick={() => setPage(lastPage)} />}
        </Pagination>
    </>
}