export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    get _actualDate() {
        return new Date();
    }
    get _futureDate() {
        return new Date(this.futureDate)
    }
    // Pra calcular a diferença de tempo.
    get _timeStampDiff() {
        // o getTime() vai fornecer o tempo em ms
        return this._actualDate.getTime() - this._futureDate.getTime();
    }
    get years() {
        // 365.25 = média de dias em um ano, considerando anos bissextos
        return Math.floor(this._timeStampDiff / (365.25 * 24 * 60 * 60 * 1000));
    }
    get months() {
        // 30.4375 = média de dias em um mês
        return Math.floor(this._timeStampDiff / (30.4 * 24 * 60 * 60 * 1000));
    }        
    get days() {
        // 24 = horas do dia * 60min cada hora * 60seg cada min * 1000 pra ir de seg pra ms
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
    }
    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000))
    }
    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000))
    }
    get seconds() {
        return Math.floor(this._timeStampDiff / 1000)
    }
    get total() {
        const years = this.years;
        const months = Math.floor(this.months % 12);
        const days = this.days % 30.4;
        // só quero o número de horas que faltam depois do days
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds,
        }
    }
}