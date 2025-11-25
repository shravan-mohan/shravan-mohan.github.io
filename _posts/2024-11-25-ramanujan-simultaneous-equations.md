---
layout: post
title: A Pedagogical Walkthrough of Ramanujan's 1912 Note on a Set of Simultaneous Equations
date: 2024-11-25 10:00:00-0000
description: Understanding Ramanujan's elegant approach to solving systems of equations using generating functions
tags: mathematics ramanujan
categories: research-notes
related_posts: false
---

In his 1912 note, Ramanujan studied a system of $$2n$$ equations involving two sets of unknowns. The system has the form:

$$
x_1 + x_2 + \cdots + x_n = a_1
$$

$$
x_1 y_1 + x_2 y_2 + \cdots + x_n y_n = a_2
$$

$$
x_1 y_1^2 + x_2 y_2^2 + \cdots + x_n y_n^2 = a_3
$$

and continues until

$$
\centering x_1 y_1^{2n-1} + x_2 y_2^{2n-1} + \cdots + x_n y_n^{2n-1} = a_{2n}
$$.

Here the numbers $$a_1, a_2, \dots, a_{2n}$$ are known, and the unknowns are $$x_1,\dots,x_n$$ and $$y_1,\dots,y_n$$. Ramanujan does not attempt to solve these equations directly. Instead, he rewrites the entire system using a single generating function.

## 1. Encoding the system into a generating function

Ramanujan defines

$$
\phi(\theta) = \frac{x_1}{1 - \theta y_1} + \frac{x_2}{1 - \theta y_2} + \cdots + \frac{x_n}{1 - \theta y_n}
$$.

Each term expands as a geometric series:

$$
\frac{x_k}{1 - \theta y_k} = x_k(1 + y_k\theta + y_k^2\theta^2 + \cdots)
$$.

Therefore, the full expansion becomes

$$
\phi(\theta) = a_1 + a_2\theta + a_3\theta^2 + \cdots + a_{2n}\theta^{2n-1} + \cdots
$$

where

$$
a_{m+1} = \sum_{k=1}^n x_k y_k^m
$$.

Thus the given system of equations corresponds exactly to the first $$2n$$ coefficients of the power-series expansion of $$\phi(\theta)$$.

## 2. Writing $$\phi(\theta)$$ as a rational function

Since $$\phi(\theta)$$ is a sum of rational functions with linear denominators, it must itself be a rational function. Ramanujan writes it as

$$
\phi(\theta) = \frac{A_1 + A_2\theta + \cdots + A_n\theta^{n-1}}{1 + B_1\theta + B_2\theta^2 + \cdots + B_n\theta^n}
$$.

The coefficients $$A_1,\dots,A_n$$ and $$B_1,\dots,B_n$$ are unknown. Expanding this rational function as a power series and matching coefficients with the earlier expansion yields linear relations among $$A_i$$, $$B_i$$, and the known values $$a_j$$.

## 3. Full system of linear equations

Equations for $$A_1,\dots,A_n$$:

$$
A_1 = a_1
$$

$$
A_2 = a_2 + a_1 B_1
$$

$$
A_3 = a_3 + a_2 B_1 + a_1 B_2
$$

$$
A_4 = a_4 + a_3 B_1 + a_2 B_2 + a_1 B_3
$$

In general:

$$
A_j = a_j + a_{j-1}B_1 + a_{j-2}B_2 + \cdots + a_1 B_{j-1}, \quad 1 \le j \le n
$$.

Equations for $$B_1,\dots,B_n$$:

$$
a_{n+1} + a_n B_1 + a_{n-1} B_2 + \cdots + a_2 B_{n-1} + a_1 B_n = 0
$$

$$
a_{n+2} + a_{n+1} B_1 + a_n B_2 + \cdots + a_3 B_{n-1} + a_2 B_n = 0
$$

Continuing similarly until the final condition:

$$
a_{2n} + a_{2n-1} B_1 + a_{2n-2} B_2 + \cdots + a_{n+1} B_{n-1} + a_n B_n = 0
$$.

This gives $$n$$ linear equations for the $$n$$ unknowns $$B_1,\dots,B_n$$. Once the $$B_i$$ are found, the $$A_i$$ follow from the earlier formulas.

## 4. Recovering the original unknowns

With $$A_i$$ and $$B_i$$ known, $$\phi(\theta)$$ is completely determined. Ramanujan then writes it in partial fractions:

$$
\phi(\theta) = \frac{p_1}{1 - q_1\theta} + \frac{p_2}{1 - q_2\theta} + \cdots + \frac{p_n}{1 - q_n\theta}
$$.

Comparing this with the original definition

$$
\phi(\theta) = \frac{x_1}{1 - \theta y_1} + \cdots + \frac{x_n}{1 - \theta y_n}
$$

immediately gives

$$
x_k = p_k, \quad y_k = q_k
$$.

Thus the unknowns $$x_k$$ and $$y_k$$ appear directly as the residues and poles of the rational function defined above.
