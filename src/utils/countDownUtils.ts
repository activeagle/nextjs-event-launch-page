export const calculateTimeToEvent = () => {
    // April 12, 2024, 9 AM PT
    const eventDate = new Date("2024-04-12T09:00:00-07:00");
    const currentDate = new Date()
    const timeRemaining = eventDate.getTime() - currentDate.getTime();

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / 1000 * 60 * 24)
    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24)
    );
    const minutes = Math.floor(timeRemaining % (1000 * 60 *24)) / (1000 * 60)
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds}
}