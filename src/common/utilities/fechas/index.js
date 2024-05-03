import moment from "moment";

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
//const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

/** Regresa una fecha formateada */
const getFechaDesc = (fecha) => {
    fecha = moment(fecha);
    let mes = moment(fecha).month();
    let dia = moment(fecha).date();
    //let diaSemana = moment(fecha).day();
    let minutos = fecha.format(":mm a");
    let horas = parseInt(fecha.format("HH"));
    horas = horas%12;
    horas = horas === 0 ? 12 : horas;
    
    return `${dia} de ${meses[mes]}, ${horas}${minutos} `
};
export { getFechaDesc };
