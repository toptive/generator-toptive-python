.. highlight:: shell

============
Installation
============


Stable release
--------------

To install <%= projectName %>, run this command in your terminal:

.. code-block:: console

    $ pip install <%= projectName %>

This is the preferred method to install <%= projectName %>, as it will always install the most recent stable release.

If you don't have `pip`_ installed, this `Python installation guide`_ can guide
you through the process.

.. _pip: https://pip.pypa.io
.. _Python installation guide: http://docs.python-guide.org/en/latest/starting/installation/


From sources
------------

The sources for <%= projectName %> can be downloaded from the `Github repo`_.

You can either clone the public repository:

.. code-block:: console

    $ git clone <%= projectUrl %>


Once you have a copy of the source, you can install it with:

.. code-block:: console

    $ python setup.py install

Or you can use the follow command:

.. code-block:: console

    $ sudo make install    # to install
    $ sudo make uninstall  # to uninstall


.. _Github repo: <%= projectUrl %>
