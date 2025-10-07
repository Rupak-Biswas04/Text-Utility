export default function Alert({alert}) {
    return(
        alert && <div className={`alert alert-${alert.type} alert-dismissible fade show role=alert`}>
            <p><strong>{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}</strong>: {alert.message}</p>
        </div>
    );
}