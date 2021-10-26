![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>
Eskilstuna Parken Zoo, Eskilstuna, Sweden. Photo by <a href="https://unsplash.com/@fridooh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Frida Bredesen</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
</span>

# Introducción a vectores

El propósito de este ejercicio es hacer una introducción al manejo básico de vectores.

- Declaración
- Recorrido
- Modificación del contenido
- Agregar un elemento
- Eliminar un elemento

## Requerimientos funcionales

1. `(20 Puntos)` Escribir una función que reciba como parámetro un vector y regrese como resultado cuántos números pares contiene:

   -  `contarPares(numero);`

2. `(20 Puntos)` Escribir una función que genere un vector de tamaño `n` con valores aleatorios entre `a` y `b`.

   - `generarVector(n, a, b);`
  
3. `(20 Puntos)` Escribir una función que reciba como parámetro un vector y regrese como resultado otro vector que contenga los números impares que contiene el vector recibido como parámetro.

   - `obtenerImpares(vector);`

4. `(20 Puntos)` Escribir una función que reciba como parámetro dos vectores, si el tamaño de los vectores no es igual entonces la función regresará -1. Si el tamaño de los dos vectores es igual la función regresará un vector con la suma de los dos vectores.

   - `sumar(vector1, vector2);`
  
5. `(20 Puntos)` Escribir una función que reciba como parámetros un vector y un número. Le función eliminará del vector todas las posiciones del vector en donde aparece el número enviado y regresará como resultado cuantas veces se eliminó.

   - `eliminarNumero(vector, numero);`
## Requerimientos no funcionales

- Las funciones deberán tener el nombre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio

## Evaluación

- Para que la tarea sea considerada como válida, el repositorio deberá tener por lo menos 1 commit por cada función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y obtendrán cero como calificación.
