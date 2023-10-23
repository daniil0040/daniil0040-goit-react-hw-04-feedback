import { StatisticItem } from "./Statistic.styled"

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul>
                <StatisticItem>Good: { good}</StatisticItem>
                <StatisticItem>Neutral: { neutral}</StatisticItem>
                <StatisticItem>Bad: {bad }</StatisticItem>
                <StatisticItem>Total: {total}</StatisticItem>
                <StatisticItem>Positive Feedback: {total > 0 ? positivePercentage() : 0}%</StatisticItem>
            </ul>
        </div>
    )
}