# Sesión interactiva de preguntas y respuestas

Nota: para revisar pregunta práctica ingresar a carpeta mi-app-react-ts

# 1. Preguntas teóricas sobre TypeScript

## ¿Qué es TypeScript y para qué se utiliza?

TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript al incluir tipado estático. Está diseñado para mejorar el desarrollo de aplicaciones en JavaScript, enfocándose en proyectos a gran escala al proporcionar herramientas que hacen que el código sea más robusto, mantenible y menos propenso a errores.

## ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?

| Aspecto      | TypeScript                                                                      | JavaScript                                          |
|--------------|---------------------------------------------------------------------------------|------------------------------------------------------|
| **Tipado**   | Estático (define tipos durante el desarrollo)                                   | Dinámico (tipos definidos en tiempo de ejecución)  |
| **Compilación**| Compila a Javascript                                                            | No necesita compilación                            |
| **Sintaxis**  | Agrega sintaxis adicional para tipos, interfaces, clases y módulos              | Sintaxis más simple y directa                       |
| **Errores**   | Detecta errores en tiempo de desarrollo                                          | Los errores se detectan en tiempo de ejecución     |
| **Compatibilidad** | Compila hasta ES3 o versiones más recientes de Javascript                      | Es compatible con todos los navegadores web         |
| **Soporte para ES6+** | Soporte completo para ES6+ y características más nuevas                  | Soporte basado en el motor del navegador             |
| **Herramientas de desarrollo** | Ofrece herramientas avanzadas de refactorización y autocompletado  | Herramientas básicas disponibles                   |
| **Adopción** | Popular entre grandes proyectos de aplicaciones web y empresas                  | Amplia adopción en proyectos web de todo tipo        |

## ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?

*   **Mejora la colaboración:** En aplicaciones de gran tamaño, TypeScript permite dividir mejor los desarrollos entre varios desarrolladores, facilitando la integración y el seguimiento de posibles errores.
*   **Autocompletado avanzado:** Proporciona un mejor autocompletado de funciones, lo que agiliza el desarrollo y reduce errores de escritura.
*   **Tipado en React:** TypeScript permite definir tipos para props, estados, eventos y funciones en React. Esto reduce errores y mejora la experiencia del desarrollador.
*   **Prevención de errores:** Al permitir la definición de tipos para props, estado y otros datos de los componentes, se reducen errores comunes como pasar props incorrectas o manejar datos inesperados.
*  **Gestión de datos mejorada:** El tipado estático permite al desarrollador especificar exactamente qué datos espera un componente, facilitando la validación y asegurando un flujo de datos consistente.
*   **Herramientas de desarrollo:**  IDE's como Visual Studio Code aprovechan TypeScript para ofrecer autocompletado preciso, detección de errores en tiempo real y documentación en línea.

## ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en el tiempo de desarrollo?

El sistema de tipos en TypeScript es una característica que permite definir y trabajar con tipos estáticos en el código.  Esto asegura que las variables, funciones, parámetros y otros elementos tengan valores específicos o estructuras predefinidas (por ejemplo, un `string`, un `number`, un objeto con una forma particular). TypeScript realiza una verificación estática del código mientras se escribe, alertando sobre problemas potenciales relacionados con los tipos. Esto previene errores que solo aparecerían en tiempo de ejecución en JavaScript, como intentar sumar un número a una cadena o acceder a una propiedad que no existe en un objeto.


# 2. Ejercicio Práctico: Definiendo Tipos e Inferencia

Se crea el componente Doctorcard, dentro de la carpeta components, que está dentro de la carpeta src. En este componente se definen los diferentes tipos para datos de doctores del hospital. En el caso de ID se combina los tipos string y number usando el operador |.

En cuanto a la inferencia, TypeScript al ver que la función Doctorcard está tipada con React.FC<Doctor>, infiere automáticamente que las props que recibe (id, name, experiencia, especialidad) tienen los mismos tipos definidos en la interfaz Doctor. No necesitas repetir los tipos en la lista de argumentos del componente.. Además se aplica en la propiedad name. 


# 3. Definición de Interfaces y Clases en TypeScript

Se implementa las interfaces en App.tsx en la segunta y tercera const. Y la clase en el componenten Doctor Manager.

# 4. TypeScript y ReactJS: Implementación Básica en un Componente

Se implementa en el componenten Doctorcard.tsx y en el componente App.tsx

# 5. Ventajas de TypeScript en el Desarrollo con ReactJS
- Mejorar la calidad del código, reducir errores y facilitar el mantenimiento a largo plazo.
- TypeScript permite definir interfaces o tipos para las props, lo que hace que los errores de tipo sean detectados en tiempo de compilación.
- Se puede tipar explícitamente el estado con useState, garantizando la coherencia de los datos.
- El tipado explícito de TypeScript sirve como una forma de documentación implícita del código, facilitando la comprensión de la estructura del código y la colaboración entre desarrolladores.