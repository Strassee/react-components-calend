import Week from './Week';
import moment from 'moment';
import 'moment/min/locales';

export default function Calendar(props) {
    moment.locale('ru');
    const date = moment(props.date);
    const params = {
        day: date.format('dddd')[0].toUpperCase() + date.format('dddd').slice(1),
        daynum: date.format('D'),
        month: date.format('D MMMM').slice(2),
        _month: date.format('MMMM')[0].toUpperCase() + date.format('MMMM').slice(1),
        year: date.format('YYYY'),
    }

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{params.day}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{params.daynum}</div>
                    <div className="ui-datepicker-material-month">{params.month}</div>
                    <div className="ui-datepicker-material-year">{params.year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{params._month}</span>&nbsp;<span className="ui-datepicker-year">{params.year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    <Week date={date} number={1} />
                    <Week date={date} number={2} />
                    <Week date={date} number={3} />
                    <Week date={date} number={4} />
                    <Week date={date} number={5} />
                    <Week date={date} number={6} />
                </tbody>
            </table>
        </div>
    );
}
