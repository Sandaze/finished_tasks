import css from "./Pagination.module.css";
import React, {useState} from "react";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    let countPortion = Math.ceil(pagesCount / props.pageSize);

    let [numberPortion, setNumberPortion] = useState(1);

    let rightLimitPortion = numberPortion * props.pageSize;
    let leftLimitPortion = numberPortion * props.pageSize - props.pageSize;
    return <div className={css.pagination}>
        <div className={css.paginationButton}>
            {numberPortion > 1 && <button onClick={() => {setNumberPortion(numberPortion - 1)}} className={css.prev}>Prev</button>}
        </div>
        {
            pages.filter(p => p>leftLimitPortion && p <= rightLimitPortion).map(page => {
                return <span onClick={() => props.changePage(page)} className={page === props.currentPage && css.currentPage}>{page}</span>
            })
        }
        <div className={css.paginationButton}>
            {numberPortion < countPortion && <button onClick={() => {setNumberPortion(numberPortion + 1)}} className={css.next}>Next</button>}
        </div>
    </div>
}

export default Pagination;