---
layout: post
title: When an Exponential Imitates a Polynomial (mod \(2^n\))
date: 2025-02-28 10:00:00-0000
description: How a MathOverflow answer shows that \(3^k\) can be represented by an integer polynomial modulo \(2^n\)
tags: mathematics number-theory modular-arithmetic
categories: research-notes
related_posts: false
---

A very elegant question appeared recently on **MathOverflow**:

> **Given a fixed integer \(n\), does there exist a polynomial \(P(x) \in \mathbb{Z}[x]\) such that**
>
> $$
> P(k) \equiv 3^k \pmod{2^n}
> \quad \text{for all } k \ge 0?
> $$

At first sight, this feels impossible. The function $$3^k$$ grows exponentially, while a polynomial grows much more slowly. How could a polynomial possibly replicate the values of an exponential function for every integer $$k$$, even after reducing modulo $$2^n$$?

The surprising answer is that it **can**—and the construction is explicit and beautiful. The exposition below follows the elegant solution given by a contributor on MathOverflow, whose argument builds the required polynomial directly from the binomial expansion of $$3^x$$.

---

## 1. Expanding $$3^x$$ using the binomial theorem

The key identity is:

$$
3^x = (1+2)^x.
$$

Applying the binomial theorem gives:

$$
(1+2)^x = \sum_{j=0}^x \binom{x}{j} \, 2^j.
$$

This suggests defining the polynomial

$$
f(x) = \sum_{j=0}^{2^n} 2^j \binom{x}{j}.
$$

Although the coefficients of $$f(x)$$ are *rational*, for integer inputs  
$$x = 0,1,\dots,2^n$$ the expression matches $$3^x$$ exactly:

$$
f(k) = 3^k \quad (0 \le k \le 2^n).
$$

To obtain an integer polynomial, we must remove the denominators coming from the binomial coefficients.

---

## 2. Separating the powers of 2 from the odd part of $$j!$$

Write the factorial as

$$
j! = 2^{\nu_j} \, q_j,
$$

where $$q_j$$ is **odd** and $$\nu_j$$ is the exponent of $$2$$ dividing $$j!$$. Then

$$
2^j \binom{x}{j}
= 2^j \cdot \frac{x(x-1)\cdots(x-j+1)}{j!}
= 2^{\,j-\nu_j} \cdot \frac{x(x-1)\cdots(x-j+1)}{q_j}.
$$

A crucial property of factorials is that

$$
j \ge \nu_j \quad \text{for all } j,
$$

so $$2^{\,j-\nu_j}$$ is an integer. Thus the only remaining denominators come from the **odd** numbers $$q_j$$.

---

## 3. Clearing the odd denominators modulo $$2^n$$

Since each $$q_j$$ is odd, it is invertible modulo $$2^n$$ (recall that modulo $$2^n$$, **every odd number has a modular inverse**.)

Let $$p_j$$ be the modular inverse of $$q_j$$:

$$
p_j q_j \equiv 1 \pmod{2^n}.
$$

Define

$$
M = \prod_{j=0}^{2^n} p_j.
$$

Multiplying the entire polynomial by $$M$$ eliminates all odd denominators, producing

$$
P(x) = M f(x) \in \mathbb{Z}[x].
$$

For each $$k = 0,1,\dots,2^n$$:

$$
P(k) \equiv M \cdot f(k) = M \cdot 3^k \pmod{2^n}.
$$

Since $$M$$ is invertible modulo $$2^n$$, this simplifies to

$$
P(k) \equiv 3^k \pmod{2^n}.
$$

---

## 4. Extending the equality to all natural numbers

The sequence $$3^k \bmod 2^n$$ is periodic, with period dividing $$2^n$$.  Therefore, if two sequences agree for $$k = 0,\dots,2^n$$, they agree for **all** $$k$$.

Thus, for every integer $$k \ge 0$$:

$$
P(k) \equiv 3^k \pmod{2^n}.
$$

This completes the construction.


