import moment from 'moment';
import 'moment/min/locales';

export default function Week(props) {
    moment.locale('ru');
    let date = moment(props.date);
    // console.log(date.format('dddd, DD MMMM YYYY h:mm:ss'));
    // console.log(date.startOf('month').format('d'));
    let startDayofWeek = date.startOf('month').format('d');
    let result = [];
    let arrLength = result.length;
    startDayofWeek = Number(startDayofWeek) === 0 ? 7 : startDayofWeek;
    if (props.number === 1) {
        date = moment(props.date);
        for (let i =  1; i <= startDayofWeek - 1; i++) {
            date = moment(props.date);
            result.push(<td className="ui-datepicker-other-month" key={date.startOf('month').subtract(startDayofWeek - i, 'days').format('D')}>{date.startOf('month').subtract(startDayofWeek - i, 'days').format('D')}</td>);
        }
        arrLength = result.length;
    }
    if (arrLength === 0) {  
        const endOfMonth = date.endOf('month').format('DD');
        let startDay = 7 * props.number - startDayofWeek - 5;
        let nextMonth = false;
        if (startDay > endOfMonth) {
            nextMonth = true;
            startDay = startDay - endOfMonth;
        } 
        for (let i = startDay; i <= (i <= endOfMonth ? startDay + 6 : endOfMonth); i++) {
            // console.log(moment(props.date),` YYYY-MM-${i} `, moment(props.date).isSame(moment(props.date).format(`YYYY-MM-${i}`)));
            if (moment(props.date).isSame(moment(props.date).format(`YYYY-MM-${i}`)) && !nextMonth) {
                result.push(<td className="ui-datepicker-today" key={i}>{i}</td>);
            } else {
                nextMonth ? result.push(<td className="ui-datepicker-other-month" key={i}>{i}</td>) : result.push(<td key={i}>{i}</td>);
            }
        }
    }
    if (result.length !== 7) {
        let arrLength = result.length;
        for (let i = 1; i <= (7 - arrLength); i++) {
            if (props.number === 1) {
                if (moment(props.date).isSame(moment(props.date).format(`YYYY-MM-${i}`))) {
                    result.push(<td className="ui-datepicker-today" key={i}>{i}</td>);
                } else {
                    result.push(<td key={i}>{i}</td>);
                }
            } else {
                result.push(<td className="ui-datepicker-other-month" key={i}>{i}</td>);
            }
        }      
    }

    return (
        <tr>{result}</tr>
    );
}
